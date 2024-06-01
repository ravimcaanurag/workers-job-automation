export const isEmpty=(value:string)=>{    
    if(value?.trim().length===0 || value==="" ){
        return true;
    }

    return false;
}

export const isValidateEmail = (email:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      return true;
    }
    return false;
  };