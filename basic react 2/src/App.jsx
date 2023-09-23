import './App.css'
import GrandFather from './Component/list/GrandFather/GrandFather'
// import ReusableForm from './Component/ReusableForm/ReusableForm'
// import HockForm from './Component/HockForm/HockForm'
// import RefForm from './Component/RefForm/RefForm'
// import StatefulForm from './Component/StatefulForm/StatefulForm'
// import SimpleForm from './Component/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //   console.log('sing data ', data);
  // }
  // const handleUpdateSubmit = data => {
  //   console.log('update ', data);
  // }
  return (

    <>
    <GrandFather/>
      {/* <SimpleForm/> */}

      {/* <StatefulForm/> */}

      {/* <RefForm/> */}

      {/* <HockForm/> */}

      {/* <ReusableForm 
        fromTitle={'Sign UP'} 
        handleSubmit={handleSignUpSubmit}
      >
        <div className="text-center">
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <p>Please sign up right now</p>
        </div>
      </ReusableForm>
      <ReusableForm 
        fromTitle={'Update'} 
        submitBtnText={'update'}
        handleSubmit={handleUpdateSubmit}
      >
        <div className="text-center">
          <h1 className='text-3xl font-bold'>Update Profile</h1>
          <p>Always update your profile update</p>
        </div>
      </ReusableForm> */}
    </>
  )
}

export default App

