'use client'

import React from 'react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { enqueueSnackbar } from 'notistack'

import {
  LinkedinLogo,
  InstagramLogo,
  XLogo,
  YoutubeLogo
} from '@phosphor-icons/react/dist/ssr'

import styles from './styles.module.scss'

const schemaValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(2, { message: 'Este campo precisa de no mínimo 2 caracteres' })
    .max(255, { message: 'Este campo suporta apenas 255 caracteres' }),
  surname: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(2, { message: 'Este campo precisa de no mínimo 2 caracteres' })
    .max(255, { message: 'Este campo suporta apenas 255 caracteres' }),
  email: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .email({ message: 'Endereço de E-mail inválido' }),
  phoneNumber: z.string().min(1, { message: 'Campo obrigatório' }),
  subject: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(2, { message: 'Este campo precisa de no mínimo 2 caracteres' })
    .max(255, { message: 'Este campo suporta apenas 255 caracteres' }),
  message: z
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .min(2, { message: 'Este campo precisa de no mínimo 2 caracteres' })
    .max(500, { message: 'Este campo suporta apenas 500 caracteres' })
})

type SchemaType = z.infer<typeof schemaValidation>

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SchemaType>({
    resolver: zodResolver(schemaValidation)
  })

  const handleSubmitFormData = (data: SchemaType) => {
    try {
      reset()
      enqueueSnackbar('Formulário enviado com sucesso', { variant: 'success' })
      console.log(data)
    } catch {
      enqueueSnackbar('Erro ao enviar o formulário', { variant: 'error' })
      throw new Error('Erro a enviar o formulário')
    }
  }

  return (
    <section id='contact' className={styles['container']}>
      <div className={styles['container__info']}>
        <h1 className={styles['info__title']}>Entre em contacto</h1>

        <div className={styles['info__office']}>
          <p className={styles['office__title']}>Escritório</p>

          <address className={styles['office__context']}>
            <p className={styles['context__address']}>
              Rua Ferraz Bomboco Nº 78, , Luanda - Angola
            </p>

            <p className={styles['context__address']}>
              401, 4th, Vision Tower, Business Bay, Dubai, UAE
            </p>
          </address>
        </div>

        <div className={styles['info__email']}>
          <p className={styles['email__title']}>Fale conosco</p>

          <div className={styles['email__context']}>
            <p className={styles['email__text']}>
              Our friendly team is here to help you
            </p>

            <p
              className={`${styles['email__address']} ${styles['email__address--emphasis']}`}
            >
              support@kandala.com
            </p>
          </div>
        </div>

        <div className={styles['info__contact']}>
          <p className={styles['contact__title']}>Contacte-nos</p>

          <address className={styles['contact__context']}>
            <p className={styles['context__text']}>Mon-Fir from 8am to 5am</p>

            <p
              className={`${styles['context__phone']} ${styles['context__phone--emphasis']}`}
            >
              (+244) 932 334 800 - Luanda - Angola
            </p>

            <p
              className={`${styles['context__phone']} ${styles['context__phone--emphasis']}`}
            >
              (+351) 998 232 838 - Lisboa - Portugal
            </p>
          </address>
        </div>

        <div className={styles['info__socialMedia']}>
          <p className={styles['socialMedia__title']}>Contacte-nos</p>

          <div className={styles['socialMedia__context']}>
            <Link href='#' className={styles['socialMedia__link']}>
              <LinkedinLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <InstagramLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <XLogo size={32} className={styles['link__icon']} />
            </Link>

            <Link href='#' className={styles['socialMedia__link']}>
              <YoutubeLogo size={32} className={styles['link__icon']} />
            </Link>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(handleSubmitFormData)}
        className={styles['container__form']}
      >
        <div className={styles['form__name']}>
          <div className={styles['form__wrapper']}>
            <label htmlFor='name' className={styles['wrapper__label']}>
              Nome
            </label>

            <input
              type='text'
              id='name'
              placeholder='John'
              className={styles['wrapper__input']}
              {...register('name')}
            />

            {errors.name?.message && (
              <p className={styles['wrapper__error']}>{errors.name?.message}</p>
            )}
          </div>

          <div className={styles['form__wrapper']}>
            <label htmlFor='surname' className={styles['wrapper__label']}>
              Sobrenome
            </label>

            <input
              type='text'
              id='surname'
              placeholder='Doe'
              className={styles['wrapper__input']}
              {...register('surname')}
            />

            {errors.surname?.message && (
              <p className={styles['wrapper__error']}>
                {errors.surname?.message}
              </p>
            )}
          </div>
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='email' className={styles['wrapper__label']}>
            E-mail
          </label>

          <input
            type='email'
            id='email'
            placeholder='john.doe@example.com'
            className={styles['wrapper__input']}
            {...register('email')}
          />

          {errors.email?.message && (
            <p className={styles['wrapper__error']}>{errors.email?.message}</p>
          )}
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='phoneNumber' className={styles['wrapper__label']}>
            Número do Telefone
          </label>

          <div className={styles['wrapper__inputContainer']}>
            <label
              htmlFor='phoneNumber'
              className={styles['inputContainer__label']}
            >
              +244
            </label>

            <input
              type='text'
              id='phoneNumber'
              className={styles['inputContainer__input']}
              {...register('phoneNumber')}
            />
          </div>

          {errors.email?.message && (
            <p className={styles['wrapper__error']}>{errors.email?.message}</p>
          )}
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='subject' className={styles['wrapper__label']}>
            Assunto
          </label>

          <input
            type='text'
            id='subject'
            placeholder='Exemplo'
            className={styles['wrapper__input']}
            {...register('subject')}
          />

          {errors.subject?.message && (
            <p className={styles['wrapper__error']}>
              {errors.subject?.message}
            </p>
          )}
        </div>

        <div className={styles['form__wrapper']}>
          <label htmlFor='message' className={styles['wrapper__label']}>
            Mensagem
          </label>

          <textarea
            id='message'
            placeholder='Texto'
            className={`${styles['wrapper__input']} ${styles['wrapper__input--textarea']}`}
            {...register('message')}
          />

          {errors.message?.message && (
            <p className={styles['wrapper__error']}>
              {errors.message?.message}
            </p>
          )}
        </div>

        <button type='submit' className={styles['form__btn']}>
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Contact
