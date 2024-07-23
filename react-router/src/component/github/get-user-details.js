export const getUserDetailsAsync= async (userId)=>{
    //alert(userId)
    const respData=await fetch(`https://api.github.com/users/${userId}`);
    return respData.json();
}

export default getUserDetailsAsync;