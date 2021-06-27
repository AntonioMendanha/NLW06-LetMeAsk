import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean,
}

//Só vai importar a tipagem se eu passar como atributo da função
export function Button({ isOutlined = false, ...props}: ButtonProps) {
  return (
    //Spread operator - passando todas as props que o botão recebe para o HTML
    <button 
      className= {`button ${isOutlined ? 'outlined' : ''}`}
      {...props} 
    />
  )
}

// export default Button; -> utilizar o export direto na função