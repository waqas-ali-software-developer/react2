interface FormData {
    name: string;
    email: string;
    comments: string;
}
export const submitData = async (url:string, method:string, data:FormData, contentType = 'application/json') => {
    
    const res = await fetch(url, {
        method: method,
        headers: {
        'Content-Type': contentType
        },
        body: JSON.stringify(data)
    })

    if (res.status === 200)
        return true

    return false
}



export const validate = (e : Event, form: FormData) => {
   if (e.type === 'submit') {
    const errors = {
        name: validate_name(form.name),
        email: validate_email(form.email),
        comments: validate_comments(form.comments),
      };
  
    return errors

   } else {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;

        switch(id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
   }
}

const validate_name = (value: string): string | null => {
    if (!value)
        return 'A name is required'
    else if (value.length < 2)
        return 'Must be a valid name'
    else
        return null
}

const validate_email = (value: string): string | null => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address'
    else
        return null
}

const validate_comments = (value: string): string | null => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 5)
        return 'Your comment must be at least 5 characters long'
    else
        return null
}
