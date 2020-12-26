import React from 'react';
import styles from './FormControls.module.css'



export const Textarea = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError ? <span>{error}</span> : ''}
            <div><textarea {...input} {...props}/></div>
        </div>
    )
}


export const Input = ({input, meta: {touched, error}, ...props}) => {

    const hasError = touched && error;

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            {hasError ? <span>{error}</span> : ''}
            <div><input {...input} {...props}/></div>
        </div>
    )
}



// Более понятно выше ↑↑↑↑↑↑  (начало урока)


// Ниже использование props.children ↓↓↓↓↓


// export const FormControl = ({input, meta, child, ...props}) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             {hasError ? <span>{meta.error}</span> : ''}
//             <div>{props.children}</div>
//         </div>
//     )
// }

// export const Textarea = (props) => {
//     const {input, meta, children, ...restProps} = props;
//     return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
// }

// export const Input = (props) => {
//     const {input, meta, children, ...restProps} = props;
//     return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
// }






// Вариант из комментариев, одной функцией ↓↓↓↓↓
// React.createElement


// export const FormControl = ({input, meta, typeField, ...props}) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             {hasError ? <span>{meta.error}</span> : ''}
//         <div>{React.createElement(typeField, {...input, ...props})}</div>
//         </div>
//     )
// }

// Использование:

//  <Field component={FormControl} typeField="input" ></Field>





 // С помощью HOC ↓↓↓↓↓

//  const Element = Element => ({ input, meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     return (
//       <div className={ s.formControl + " " + (hasError ? s.error : "") }>
//         <Element {...input} {...props} />
//         { hasError && <span> { meta.error } </span> }
//       </div>
//     );
//   };
  
//   А потом просто его импортим в компоненту формы, вызываем как
  
//   const Textarea = Element("textarea");
  
//   и передаем
  
//   <Field component={Textarea} .../>

// P.S. Аргумент у HOC должен быть с большой буквы, чтобы React понимал, что перед ним не обычный html-тег, а компонент/переменная.
// P.P.S. Создавать const Textarea = Element("textarea"); нужно вне компонента с формой.
//  наче фокус с формы сбрасывается после первого символа (хз почему, видимо, ререндерится)