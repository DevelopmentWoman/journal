import { useEffect, useMemo, useState } from "react"

export const useForm = (initialForm={}, formValidations={}) => {
  
  // console.log(initialForm)



    const [formState, setformState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
      // console.log(formValidations)
      createValidators();
    }, [formState])
    
    const isFormValid = useMemo(()=>{

      for(const formValue of Object.keys(formValidation)){
        if(formValidation[formValue] !== null) return false;
      }
      return true;
    }, [formValidation])

    const onInputChange = (e)=>{

        const {name, value} = e.target
        setformState({
            ...formState,
            [name]: value
        })
    }


    const onReset = ()=>{
        setformState(initialForm)
    }


    const createValidators = () =>{
      const formCheckedValues = {};
   
      for (const formField of Object.keys( formValidations)){
        const [fn, errorMessage] = formValidations[formField];
   

        formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;

      }
      setFormValidation(formCheckedValues)
    }

  return {
    ...formState,
    formState,
    onInputChange,
    onReset,
    ...formValidation,
    isFormValid,
  }
}


