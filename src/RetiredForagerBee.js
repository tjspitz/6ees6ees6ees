class RetiredForagerBee extends ForagerBee {
  constructor() {
    super(ForagerBee);
    this.age = 40;
    this.job  = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  }
  gamble() {
    this.treasureChest.push('treasure');
  }
};
