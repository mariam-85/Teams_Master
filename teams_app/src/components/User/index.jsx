import React, { useContext} from 'react'
import style from './index.module.css'
import { Context } from '../../context'

export default function User({ id, name, team }) {

    const { deleteUser } = useContext(Context);

  return (
    <div className={style.user_card} onClick={() => deleteUser(id)}>
        <p>{ name }</p>
        <p> { team }</p>
    </div>
  )
}
