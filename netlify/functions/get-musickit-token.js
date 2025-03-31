exports.handler = async function() {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: process.env.MUSICKIT_DEVELOPER_TOKEN
      })
    };
  };