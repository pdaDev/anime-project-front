import React, {Fragment, useEffect, useState} from "react";
import styled from "styled-components";
import {FormOpenButton} from "./OpenButton/FormOpenButton";
import {SubmitButton} from "../../../common/UI/Button/Submit/SubmitButton";
import {addCheckedProperty, addCheckedPropertyForObject} from "../../../utils/helpers/helpers";
import {useToggle} from "../../../utils/hooks/useToggle";

export const StyledFilterForm = styled.div`
  width: 500px;
  height: 800px;
  box-shadow: -5px 4px 39px 7px #00000040;
  background: white;
  position: fixed;
  z-index: 1337;
  top: 100%;
  transform: translate(${props => props.isOpen ? '0%' : `${props.basicPos || -105}%`}, -103%);
  transition: 300ms;
  padding: 20px;
  box-sizing: border-box;;

`
const Content = styled.div`
  z-index: 5;
  position: relative;
`
export const CatalogFilterForm = ({data, selectGenre, selectType, selectAgeDistinction, setCheckedData}) => {

    const [isOpen, toggleOpen] = useToggle(false)
    const handleSubmit = () => {
        const copy = {...data}
        Object.keys(copy).forEach(x => copy[x] = copy[x].filter(y => y.checked))
        setCheckedData(copy)
        toggleOpen()

    }

    return <StyledFilterForm isOpen={isOpen}>
        <Content>
            <h2>Жанры</h2>
            {data.genres.map(x => <CheckBox key={x.id} handleClick={selectGenre} {...x}/>)}
            <h2>Типы</h2>
            {data.types.map(x => <CheckBox key={x.id} handleClick={selectType} {...x}/>)}
            <h2>Возрастное ограничение</h2>
            {data.ageDistinctions.map(x => <CheckBox key={x.id} handleClick={selectAgeDistinction} {...x}/>)}
            <SubmitButton name={'Принять'} onClick={handleSubmit}/>
        </Content>
        <FormOpenButton isOpen={isOpen} toggleOpen={toggleOpen}/>
    </StyledFilterForm>
}

const CheckBox = ({id, name, checked, handleClick}) => {
    return <div>
        <input id={id}
               type={'checkbox'}
               value={name}
               checked={checked}
               onClick={() => handleClick(id)}/>
        <label onClick={() => handleClick(id)}>
            {name}
        </label>
    </div>
}