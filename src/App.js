import './App.css';
import {Container, Header, Statistic, Segment, Grid, Icon, Form, Button} from 'semantic-ui-react';

function App() {
    return (
        <Container>
            <Header as="h1">Budget</Header>

            <Statistic size="small">
                <Statistic.Label>Your balance:</Statistic.Label>
                <Statistic.Value>2,550.50</Statistic.Value>
            </Statistic>

            <Segment textAlign="center">
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                        <Statistic size='tiny' color='green'>
                            <Statistic.Label style={{textAlign:'left'}}>
                                Incoming:
                            </Statistic.Label>
                            <Statistic.Value>1,045.50</Statistic.Value>
                        </Statistic>
                        </Grid.Column>
                        <Grid.Column>
                            <Statistic size='tiny' color='red'>
                                <Statistic.Label style={{textAlign:'left'}}>
                                    Expenses:
                                </Statistic.Label>
                                <Statistic.Value>640.50</Statistic.Value>
                            </Statistic>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Header as='h3'>History</Header>
            <Segment color='red'>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>$10,00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' ></Icon>
                            <Icon name='trash'></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color='green'>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>$105,00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' ></Icon>
                            <Icon name='trash'></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment color='red'>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
                        <Grid.Column width={3} textAlign='right'>$20,00</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' ></Icon>
                            <Icon name='trash'></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Header as='h3'>Add a new transaction</Header>
            <Form unstackable>
                <Form.Group>
                    <Form.Input
                    icon='tags'
                    width={12}
                    label='description'
                    placeholder='New shiny thing'
                    />
                    <Form.Input
                        icon='dollar'
                        width={4}
                        label='value'
                        placeholder='100.00'
                        iconposition='left'
                    />
                </Form.Group>
                <Button.Group style={{marginTop:20}}>
                    <Button>Cancel</Button>
                    <Button.Or/>
                    <Button primary>Ok</Button>
                </Button.Group>
            </Form>

        </Container>
    );
}

export default App;
