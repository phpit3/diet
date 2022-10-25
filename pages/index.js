import React, { useState } from 'react'
import { Container, Card, Grid, Image, Form } from 'semantic-ui-react'
import { Header, Footer } from "../components";
import styles from '../styles/Home.module.css'

const Diet = () => {
  const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ];

  const [value, setValue] = useState();

  const handleChange = (e, { value }) => {

  };

  return (
    <div>
      <Container>
        <Header />
      </Container>

      <div className={styles.content}>
        <Container>
          <Card fluid className={styles.custom_card}>
            <Card.Content>
              <Grid>
                <Grid.Column width={4} className={styles.custom_card_left}>
                  <Image src='icon-nutrition.svg' className={styles.custom_icon_form} />
                  <h2 className={styles.custom_card_title}>Tư vấn dinh dưỡng</h2>
                </Grid.Column>
                <Grid.Column width={12}>
                  <Form>
                    <Form.Group widths='equal'>
                      <Form.Input fluid label='First name' placeholder='First name' />
                      <Form.Input fluid label='Last name' placeholder='Last name' />
                      <Form.Select
                        fluid
                        label='Gender'
                        options={options}
                        placeholder='Gender'
                      />
                    </Form.Group>
                    <Form.Group inline>
                      <label>Size</label>
                      <Form.Radio
                        label='Small'
                        value='sm'
                        checked={value === 'sm'}
                        onChange={handleChange}
                      />
                      <Form.Radio
                        label='Medium'
                        value='md'
                        checked={value === 'md'}
                        onChange={handleChange}
                      />
                      <Form.Radio
                        label='Large'
                        value='lg'
                        checked={value === 'lg'}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Checkbox label='I agree to the Terms and Conditions' />
                    <Form.Button>Submit</Form.Button>
                  </Form>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Container>
      </div>
      {/* <Container>
        <Footer />
      </Container> */}
    </div>
  )
}

export default Diet;