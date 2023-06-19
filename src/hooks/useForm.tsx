import { useState } from 'react'

export default function useForm() {
    const [form, setForm] = useState({})

    const onChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onClick = () => {
        console.log(form)
    }

    return {
        onChange,
        onClick
    }
}