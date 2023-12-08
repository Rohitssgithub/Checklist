import React, { memo } from 'react'
import Input from "components/formikcontrols/input/Input"
import Password from "components/formikcontrols/password/Password"
import Select from 'components/formikcontrols/select/Select'
import Textarea from 'components/formikcontrols/textarea/Textarea'
import Date from 'components/formikcontrols/date/Date'

const FormikControl = (props) => {

    const { control, ...rest } = props
    
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'password': return <Password {...rest} />
        case 'select': return <Select {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'date': return <Date {...rest} />
        default: return null
    }
}

export default memo(FormikControl)
