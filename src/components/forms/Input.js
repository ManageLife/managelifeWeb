import React from 'react'
import { camelCaseToTitle } from 'utils'

const Input = ({ type, onChange, fieldName, value }) => (
   <>
      {value && (
         <label htmlFor='firstName'>
            {camelCaseToTitle(fieldName)}
            {': '}
         </label>
      )}
      <input
         type={type}
         name={fieldName}
         placeholder={camelCaseToTitle(fieldName)}
         onChange={e => onChange(e)}
         value={value}
      />
      <br />
   </>
)

export { Input }
