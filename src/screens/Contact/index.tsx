import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Alert, Modal, StatusBar } from 'react-native';
import * as S from './styles';

import { useForm, Controller, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { EMAILJS_KEY } from '../../keys';
import Icon from 'react-native-vector-icons/FontAwesome';

type FormDataType = {
  name: string;
  email: string;
  message: string;
};

const emailRegex = /^[\w.-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

const signUpSchema = yup.object({
  name: yup
    .string()
    .required('O nome precisa ser informado')
    .min(5, 'O nome deve ter pelo menos 5 caracteres')
    .max(25, 'O nome deve ter no máximo 25 caracteres')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word: string) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  email: yup
    .string()
    .matches(emailRegex, 'Formato de e-mail inválido')
    .email('Formato de e-mail inválido')
    .required('O e-mail precisa ser informado'),
  message: yup
    .string()
    .required('Informe a mensagem')
    .min(15, 'A mensagem deve conter ao menos 15 digitos'),
});

export function Contact() {
  const [modalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(signUpSchema),
  });

  const sendEmail = (data: FormDataType) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };
    emailjs
      .send('service_sygeodr', 'template_d6u1w7v', templateParams, EMAILJS_KEY)
      .then((response) => {
        console.log('Email enviado', response.status);
      });
    setModalVisible(true);
    setValue('name', '');
    setValue('email', '');
    setValue('message', '');
  };

  useEffect(() => {
    setTimeout(() => {
      if (modalVisible) {
        setModalVisible(false);
      }
    }, 3000);
  }, [modalVisible]);

  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <S.HeaderArea>
          <Text style={{ fontFamily: 'Sriracha-Regular', fontSize: 25, color: '#aaa' }}>
            Contate-me
          </Text>
        </S.HeaderArea>
        <S.BodyArea>
          <S.InputArea>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <S.SmallInput
                  placeholder="Digite seu nome"
                  placeholderTextColor="gray"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name && <S.ErrorMessage>{errors.name.message}</S.ErrorMessage>}
          </S.InputArea>
          <S.InputArea>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <S.SmallInput
                  placeholder="Digite seu email"
                  placeholderTextColor="gray"
                  keyboardType="email-address"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.email && <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>}
          </S.InputArea>
          <S.InputArea>
            <Controller
              control={control}
              name="message"
              render={({ field: { onChange, value } }) => (
                <S.BigInput
                  placeholder="Digite sua mensagem..."
                  placeholderTextColor="gray"
                  multiline
                  textAlignVertical="top"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.message && <S.ErrorMessage>{errors.message.message}</S.ErrorMessage>}
          </S.InputArea>
          <S.InputArea>
            <S.SendButton onPress={handleSubmit(sendEmail)}>
              <S.SendButtonText>Enviar</S.SendButtonText>
            </S.SendButton>
          </S.InputArea>
        </S.BodyArea>
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <S.Shadow onPress={() => setModalVisible(false)}>
          <StatusBar backgroundColor="rgba(255,255,255,0.3)" />
          <S.AlertBox>
            <Icon name="check-circle-o" size={80} color="green" />
            <S.AlertText>Email enviado com sucesso</S.AlertText>
          </S.AlertBox>
        </S.Shadow>
      </Modal>
    </S.Container>
  );
}
