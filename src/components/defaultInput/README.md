How to use the DefaultInput component:
NOTE: i use the exact variable names as example

1. DefaultInput component takes in some parameters

  # label : string 
  # placeholder : string 
  # type : string 
  # name : string 
  # handlechange : function (event) 
  # required : boolean 
  # handleBlur : function (event)
  # err : boolean 



  example:

#  <DefaultInput
#    label="Email"
#    placeholder="E.g timi.eze.adamu@address.com"
#    type="email"
#    name="email"
#    handlechange={(event)=>handleChange(event)}
#    handleBlur={(event)=>handleBlur(event)}
#    required={true}
#    err={formErr.email}
#  />

