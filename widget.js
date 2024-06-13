var popup = document.getElementById("payright_modal");
  document.getElementsByTagName('body')[0].appendChild(popup)
  
  var payright_logo = document.getElementById('payright-logo');
  payright_logo.addEventListener('click', function(e){
    document.getElementById("payright_modal").style.display = "block";
  });
  
  var payright_close = document.getElementById('payright-close');
  payright_close.addEventListener('click', function(e){
    document.getElementById("payright_modal").style.display = "none";
  });
  
  var payright_popup_content = document.getElementById('modal-content-1')
  document.addEventListener('click', event => {
    const isClickInside = payright_popup_content.contains(event.target)
    const isClickImage = payright_logo.contains(event.target)
    if (!isClickInside && !isClickImage) {
      document.getElementById("payright_modal").style.display = "none";
    }
  })
  
  var payrightConfig = {
      "data": {
          "rates": [
              {
                  "minimumSaleAmount": 1.11,
                  "minimumDepositPercentage": 10,
                  "term": 3,
                  "minimumPurchase": 1,
                  "maximumPurchase": 1000,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 5.5,
                  "rate15": null,
                  "rate20": null,
                  "rate25": null,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 166.67,
                  "minimumDepositPercentage": 10,
                  "term": 3,
                  "minimumPurchase": 150,
                  "maximumPurchase": 1500,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 7.5,
                  "rate15": null,
                  "rate20": null,
                  "rate25": null,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 1667.78,
                  "minimumDepositPercentage": 10,
                  "term": 6,
                  "minimumPurchase": 1501,
                  "maximumPurchase": 2000,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 8.5,
                  "rate15": null,
                  "rate20": null,
                  "rate25": null,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 1667.78,
                  "minimumDepositPercentage": 10,
                  "term": 12,
                  "minimumPurchase": 1501,
                  "maximumPurchase": 2500,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 9.5,
                  "rate15": null,
                  "rate20": 5,
                  "rate25": 5,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 2778.89,
                  "minimumDepositPercentage": 10,
                  "term": 12,
                  "minimumPurchase": 2501,
                  "maximumPurchase": 3000,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 10.5,
                  "rate15": null,
                  "rate20": null,
                  "rate25": null,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 2778.89,
                  "minimumDepositPercentage": 10,
                  "term": 24,
                  "minimumPurchase": 2501,
                  "maximumPurchase": 5000,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 12.5,
                  "rate15": null,
                  "rate20": 5,
                  "rate25": 5,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              },
              {
                  "minimumSaleAmount": 5556.67,
                  "minimumDepositPercentage": 10,
                  "term": 60,
                  "minimumPurchase": 5001,
                  "maximumPurchase": 20000,
                  "rate00": null,
                  "rate05": null,
                  "rate10": 11.5,
                  "rate15": null,
                  "rate20": 5,
                  "rate25": 5,
                  "rate30": null,
                  "rate35": null,
                  "rate40": null,
                  "rate45": null,
                  "rate50": null
              }
          ],
          "establishmentFees": [
              {
                  "initialEstFee": 59.9,
                  "repeatEstFee": 19.95,
                  "term": 36
              },
              {
                  "initialEstFee": 5,
                  "repeatEstFee": 5,
                  "term": 3
              },
              {
                  "initialEstFee": 59,
                  "repeatEstFee": 19.95,
                  "term": 12
              },
              {
                  "initialEstFee": 0,
                  "repeatEstFee": 0,
                  "term": 2
              },
              {
                  "initialEstFee": 89.95,
                  "repeatEstFee": 19.95,
                  "term": 60
              },
              {
                  "initialEstFee": 89.95,
                  "repeatEstFee": 19.95,
                  "term": 48
              },
              {
                  "initialEstFee": 59.9,
                  "repeatEstFee": 19.95,
                  "term": 18
              },
              {
                  "initialEstFee": 59.9,
                  "repeatEstFee": 19.95,
                  "term": 24
              },
              {
                  "initialEstFee": 59.9,
                  "repeatEstFee": 19.95,
                  "term": 30
              },
              {
                  "initialEstFee": 49,
                  "repeatEstFee": 19.95,
                  "term": 9
              },
              {
                  "initialEstFee": 39,
                  "repeatEstFee": 19.95,
                  "term": 6
              }
          ],
          "otherFees": {
              "monthlyAccountKeepingFee": 3.95,
              "paymentProcessingFee": 3.95
          }
      }
  }
  
  
  function getRepayments(salesAmount) {
    if(!payrightConfig){
      document.getElementById("payright-widget").style.display = 'none'
      return
    }
      try {
          var updatedSaleAmount = salesAmount / 100;
  
          var {
              rates,
              establishmentFees,
              otherFees: { monthlyAccountKeepingFee, paymentProcessingFee },
          } = payrightConfig.data;
  
          let depositPercentage = 0;
          let depositAmount = 0;
          let loanAmount = 0;
  
          var rateCards = rates.filter((rate) => {
              depositPercentage = rate.minimumDepositPercentage;
              depositAmount = updatedSaleAmount * (depositPercentage / 100);
              loanAmount = parseFloat((updatedSaleAmount - depositAmount).toFixed(2));
  
              if (loanAmount >= rate.minimumPurchase && loanAmount <= rate.maximumPurchase) {
                  return rate;
              }
          });
  
          var rateCard = rateCards[0];
          if(!rateCard){
            document.getElementById("payright-widget").style.display = 'none';
          }
          var paymentPeriod = rateCard.term;
          var numberOfRepayments = Math.round(paymentPeriod * (26 / 12));
  
          var establishmentFee = establishmentFees.find(
              (rate) => rate.term === paymentPeriod
          ).initialEstFee;
  
          var accountKeepingFee = (monthlyAccountKeepingFee * 12) / 26;
  
          var totalAmount =
              (loanAmount + establishmentFee) / numberOfRepayments +
              (accountKeepingFee + paymentProcessingFee);
          var payments = totalAmount.toFixed(2);
          var repayments = `${numberOfRepayments} fortnightly payments of $${payments}`;
  
         
          document.getElementById("repayments").innerHTML = repayments;
          document.getElementById("payright-widget").style.display = 'block';
      } catch (e) {
          console.error(e);
          document.getElementById("payright-widget").style.display = 'none';
          throw new Error('Error fetching repayments');
      }
  }