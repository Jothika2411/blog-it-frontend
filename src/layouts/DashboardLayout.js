import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DashboardContainer, Header, HeaderContent, WelcomeText, LogoutButton, NewPostButton, ButtonGroup } from '../styles/layouts/dashboard.styles';
import AddPostModal from '../components/blog/AddPostModal';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const greetings = {
    morning: [
      'Fresh ideas brewing!',
      'Ready to inspire?',
      'Create magic!',
      "Let's make stories!",
      'Your morning canvas awaits!',
      'Time to craft brilliance!',
    ],
    afternoon: ['Keep the creativity flowing!', 'Stories await!', 'Your words matter!', 'Ideas flowing!', 'Write your heart out!', 'Make your mark!'],
    evening: [
      'Spark your creativity!',
      'Time to shine!',
      'Create something amazing!',
      'Let your ideas flow!',
      'Evening of inspiration!',
      'Craft your masterpiece!',
    ],
  };

  const fallbackNames = ['Storyteller', 'Wordsmith', 'Creator', 'Inspiration', 'Artisan', 'Visionary'];

  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    let timeOfDay;
    let greeting;

    if (hour < 12) {
      timeOfDay = 'morning';
      greeting = 'Good morning';
    } else if (hour < 17) {
      timeOfDay = 'afternoon';
      greeting = 'Good afternoon';
    } else {
      timeOfDay = 'evening';
      greeting = 'Good evening';
    }

    return `${getRandomItem(greetings[timeOfDay])} ${greeting}`;
  };

  const handleLogout = () => {
    signOut();
    navigate('/signin');
  };

  return (
    <DashboardContainer>
      <Header>
        <HeaderContent>
          <WelcomeText>
            {getGreeting()}, {user?.username || getRandomItem(fallbackNames)} ✨
          </WelcomeText>
          <ButtonGroup>
            <NewPostButton onClick={() => setIsModalOpen(true)}>Post a Blog</NewPostButton>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ButtonGroup>
        </HeaderContent>
      </Header>
      {children}
      <AddPostModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </DashboardContainer>
  );
};

export default DashboardLayout;
