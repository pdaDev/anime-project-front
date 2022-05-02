export const passwordValidator = value =>   {
    if (/.*[а-яА-Я]+.+/.test(value))
        return  'NO RUSSIAN'
    if (!/.*\d.*/.test(value))
        return 'Пароль должен содержать хотя бы одну цифру'
    if (!/.*[!№@#%$&]+.*/.test(value))
        return 'Пароль должен содержать №@#%$& '
    if (!/.*[A-Z]+.*/.test(value))
        return 'Пароль должен содержать прописыне буквы'
    if (value.toString().split(' ').length > 1)
        return  'Пароль не должен содержать пробелов'
    if (value.length < 7)
        return 'Минимум 7 символов'
}

