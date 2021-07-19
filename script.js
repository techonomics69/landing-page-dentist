const downloadIntakeFile = () => {
  window.open('https://www.phinneyridgedental.com/thedentalsitecontent/1001570/forms/Dental_Intake_Form_2_1.pdf', '_blank');
};

const sendSMS = () => {
  client.messages.create({
    body: 'Testing, from Twilio.',
    to: '+18043964584',
    from: ''
  })
}
