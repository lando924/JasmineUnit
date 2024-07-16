
it('Should calculate the monthly rate correctly.', function () {
  const values = {
    amount: 20000,
    years: 15,
    rate: 5.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('167.69');
});


it("Should return a result with 2 decimal places.", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('106.07');  
});

