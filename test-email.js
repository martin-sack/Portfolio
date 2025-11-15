// Test Web3Forms API directly
const accessKey = '97c0b022-907e-4bbe-830d-86fb3f0c94a2';

const testData = {
  access_key: accessKey,
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Email from Portfolio',
  message: 'This is a test message to verify Web3Forms is working correctly.'
};

console.log('Testing Web3Forms API...');
console.log('Sending to email associated with access key');

fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then(response => response.json())
  .then(result => {
    console.log('\n✅ Response from Web3Forms:');
    console.log(JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('\n🎉 SUCCESS! Check your email: lennyymartin773@gmail.com');
    } else {
      console.log('\n❌ FAILED:', result.message);
    }
  })
  .catch(error => {
    console.error('\n❌ Error:', error);
  });
