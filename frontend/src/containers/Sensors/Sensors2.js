import React from 'react';
import './App.css';

import * as mqtt from 'react-paho-mqtt';

function App() {
  const [ client, setClient ] = React.useState(null);
  const _topic = ["Hello"];
  const _options = {};

  React.useEffect(() => {
    _init();
  },[])

  const _init = () => {
    const c = mqtt.connect("test.mosquitto.org", Number(8081), "mqtt", _onConnectionLost, _onMessageArrived); // mqtt.connect(host, port, clientId, _onConnectionLost, _onMessageArrived)
    setClient(c);
  }

  // called when sending payload
  const _sendPayload = () => {
    const payload = mqtt.parsePayload("Hello", "World"); // topic, payload
    client.send(payload);
  }

  // called when client lost connection
  const _onConnectionLost = responseObject => {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost: " + responseObject.errorMessage);
    }
  }

  // called when messages arrived
  const _onMessageArrived = message => {
    console.log("onMessageArrived: " + message.payloadString);
  }


  // called when subscribing topic(s)
  const _onSubscribe = () => {
    client.connect({ onSuccess: () => {
      for (var i = 0; i < _topic.length; i++) {
        client.subscribe(_topic[i], _options);
      }}
    }); // called when the client connects
  }

  // called when subscribing topic(s)
  const _onUnsubscribe = () => {
    for (var i = 0; i < _topic.length; i++) {
      client.unsubscribe(_topic[i], _options);
    }
  }

  // called when disconnecting the client
  const _onDisconnect = () => {
    client.disconnect();
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          style={{ color: 'white' }}
          onClick={_onSubscribe}>
          <h1>Subscribe Topic</h1>
        </button>
        <button
          style={{ color: 'white' }}
          onClick={_sendPayload}>
          <h1>Send Message</h1>
        </button>
      </header>
    </div>
  );
}

export default App;