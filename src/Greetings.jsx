const Greetings= ({inLoginIn}) => {
// if(inLoginIn){
//     return <h2>welcome back!</h2>
// }else{
//     return <h2> Please sing in </h2>
// }
 

return <h1> {inLoginIn ? 'welcome back' : 'please sing in'} </h1>


}
export default Greetings