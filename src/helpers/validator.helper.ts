import { Joi, Modes, Segments, celebrate } from 'celebrate'

export const searchSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object().keys({
      query: Joi.string().required(),
      page: Joi.string().default(1),
      limit: Joi.string().default(10),
    }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)

export const songsSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object()
      .keys({
        id: Joi.string(),
        link: Joi.string().custom((value, helper) => {
          if (value.includes(`jiosaavn.com/song/`)) {
            const token = value.split(`song/`)[1].split('/')[1].slice(0, 11)

            return token
          } else {
            return helper.message({
              custom: 'invalid song link',
            })
          }
        }),
      })
      .xor('id', 'link')
      .messages({ custom: 'id and link are not supported together, pass only one of them' }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)

export const albumsSchema = celebrate(
  {
    [Segments.QUERY]: Joi.object()
      .keys({
        id: Joi.string(),
        link: Joi.string().custom((value, helper) => {
          if (value.includes(`jiosaavn.com/song/`)) {
            const token = value.split(`song/`)[1].split('/')[1].slice(0, 11)

            return token
          } else {
            return helper.message({
              custom: 'invalid song link',
            })
          }
        }),
      })
      .xor('id', 'link')
      .messages({ custom: 'id and link are not supported together, pass only one of them' }),
  },
  { abortEarly: false },
  { mode: Modes.FULL }
)
