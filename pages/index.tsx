import { Button, Flex } from '@chakra-ui/react'
import Pusher from 'pusher-js'

const Home = () => {
  let apiKey = process.env.API_KEY
  if (apiKey == undefined) {
    apiKey = ''
  }

  let receiver = new Pusher(apiKey, {
    cluster: 'ap3',
  })

  let channel = receiver.subscribe('my-channel')
  channel.bind('my-event', (data: any) => {
    alert(JSON.stringify(data))
  })

  return (
    <Flex justifyContent="center" alignItems="center" w="full" h="1000px">
      <Button onClick={() => console.log('Test')}>Trigger</Button>
    </Flex>
  )
}

export default Home
