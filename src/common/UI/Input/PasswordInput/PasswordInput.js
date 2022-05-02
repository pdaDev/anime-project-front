import React, {useState} from "react";
import eye from '../../../../assets/icons/eye.svg'
import crossedEye from '../../../../assets/icons/crossed-out-eye.png'
import styled from "styled-components";
import s from './PasswordInput.module.css'
const Eye = styled.img`
  height: 22px;
  width: 22px;
  cursor: pointer;
  position: absolute;
  z-index: 3;
  top: 50%;
  transform: translate(-140%, -74%);
  left: 100%;
`

export const PasswordInput = ({inputRegister, ...props}) => {
    const [type, setType] = useState('password')
    return (
          <div className={s.wrap}>
              <input {...inputRegister} {...props} type={type} style={{paddingRight: '30px',

              }} />
              <Eye src={eye}
                   onMouseDown={()=>setType('text')}
                   onMouseUp={()=>setType('password')}
              />
          </div>
    )

}