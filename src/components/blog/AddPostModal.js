import React from 'react';
import { useMutation } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import { ADD_POST } from '../../graphql/mutations';
import { GET_POSTS } from '../../graphql/queries';
import { blogPostSchema } from '../../validations/blogSchema';
import { ModalOverlay, ModalContent, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from '../../styles/components/modal.styles';
import { InputGroup, Label, ErrorMessage, CharacterCount } from '../../styles/components/form.styles';
import { Input, TextArea } from '../../styles/components/inputs.styles';
import Button from '../../styles/components/buttons.styles';
import styled from 'styled-components';

const AddPostModal = ({ isOpen, onClose }) => {
  const [addPost] = useMutation(ADD_POST, {
    refetchQueries: [{ query: GET_POSTS }],
  });

  const initialValues = {
    title: '',
    content: '',
  };

  const testData = {
    title: 'The Art of Creative Writing',
    content:
      "Writing is not just about putting words on paper; it's about creating worlds, sharing emotions, and connecting with readers. Every writer has their unique voice, and finding that voice is part of the beautiful journey of creative writing. Remember, the first draft doesn't have to be perfect - it just needs to exist.",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addPost({
        variables: {
          input: {
            title: values.title.trim(),
            content: values.content.trim(),
          },
        },
      });
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error adding post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <Formik initialValues={initialValues} validationSchema={blogPostSchema} onSubmit={handleSubmit}>
          {({ isSubmitting, errors, touched, values, setFieldValue }) => (
            <Form>
              <ModalHeader>
                <div>
                  <ModalTitle>Write a New Blog</ModalTitle>
                  <QuickFillButton
                    type='button'
                    onClick={() => {
                      setFieldValue('title', testData.title);
                      setFieldValue('content', testData.content);
                    }}
                  >
                    (Quick Fill Test Data)
                  </QuickFillButton>
                </div>
                <ModalClose type='button' onClick={onClose}>
                  &times;
                </ModalClose>
              </ModalHeader>
              <ModalBody>
                <InputGroup>
                  <Label htmlFor='title'>Title</Label>
                  <Field as={Input} id='title' name='title' type='text' placeholder='Enter your blog title' />
                  {touched.title && errors.title && <ErrorMessage>{errors.title}</ErrorMessage>}
                  <CharacterCount>{values.title.length}/100 characters</CharacterCount>
                </InputGroup>
                <InputGroup>
                  <Label htmlFor='content'>Content</Label>
                  <Field as={TextArea} id='content' name='content' rows={6} placeholder='Write your blog...' />
                  {touched.content && errors.content && <ErrorMessage>{errors.content}</ErrorMessage>}
                  <CharacterCount>{values.content.length}/5000 characters</CharacterCount>
                </InputGroup>
              </ModalBody>
              <ModalFooter>
                <Button type='button' variant='secondary' onClick={onClose}>
                  Cancel
                </Button>
                <Button type='submit' disabled={isSubmitting}>
                  {isSubmitting ? 'Publishing...' : 'Publish Blog'}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

const QuickFillButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.75rem;
  padding: 0;
  margin-top: ${(props) => props.theme.spacing.xs};
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.8;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default AddPostModal;
