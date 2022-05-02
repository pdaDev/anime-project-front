import styled from "styled-components";
import React from "react";

const Table = styled.table`
  margin-top: 2px;
  font-size: ${({fontSize}) => fontSize || 24}px;
  margin-bottom: 5px;
`
const Column = styled.td`
  padding-top: ${({paddingTop}) => paddingTop || 10}px;
  &:first-child {
    padding-right: ${({paddingRight}) => paddingRight || 90}px;
  }
`
const TableItem = ({title, data, ...props}) => {

    return (
        <tr>
            <Column {...props}>{title ? `${title}:` : null}</Column>
            <Column {...props}>{data}</Column>
        </tr>
    )
}
const TableItemSelector = ({title, data, ...props}) => {
  if (Array.isArray(data)) {
      return (
          <>
              {data.map((item, i) => {
                  const prop = Object.keys(item)[1]
                  return <TableItem {...props} key={i} title={!i ? title : null} data={item[prop]}/>
              })}
          </>
      )
  } else {
      return <TableItem {...props} title={title} data={data}/>
  }


}
export const ContentSpecialInfo = ({data, ...props}) => {
    return (
            <Table {...props}>
                <tbody>
                {[...data.entries()].map(item => <TableItemSelector {...props} key={item[0]} title={item[0]} data={item[1]}
                />)}
                </tbody>
            </Table>
    )

}
/**
 *  <tr>
 *
 *                     <Column>Дата выхода:</Column>
 *                     <Column>{releaseDate}</Column>
 *                 </tr>
 *                 <tr>
 *                     <Column>Статус:</Column>
 *                     <Column>{status}</Column>
 *                 </tr>
 *                 <tr>
 *                     <Column>Эпизодов:</Column>
 *                     <Column>{countOfEpisodes}</Column>
 *                 </tr>
 *                 <tr>
 *                     <Column>Студия:</Column>
 *                     <Column>{studio}</Column>
 *                 </tr>
 *                 <tr>
 *                     <Column>Длительность:</Column>
 *                     <Column>{episodeDuration + ' мин'}{countOfEpisodes > 1 && '/серия'} </Column>
 *                 </tr>*/