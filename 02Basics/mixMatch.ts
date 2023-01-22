type carNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

//& for combining stuff
type cardDetails = carNumber &
  cardDate & {
    cvv: number;
  };

//simple stuff -- creating your own type and stuff
