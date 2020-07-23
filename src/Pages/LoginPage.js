import React from 'react';
import Form from 'carbon-components-react/lib/components/Form';
import TextInput from 'carbon-components-react/lib/components/TextInput';
import Button from 'carbon-components-react/lib/components/Button';

function LoginPage(){

  return(
      <div>
        <h1>My App</h1>
        <p>Please sign-in:</p>
        <Form>
          <TextInput
           disabled={false}
           labelText="Email"
           type="email"
           light={false}
          />
        </Form>

        <Button ButtonKind="ghost">
          Submit
        </Button>
      </div>
  )
}
export default LoginPage;