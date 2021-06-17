class Singleton {
    private static instance: Singleton;
    private constructor() {}
    public static getInstance() {
      if (this.instance === null) {
        this.instance = new Singleton();
      }
      return this.instance;
    }
  }
  
  const instance1 = Singleton.getInstance();
  const instance2 = Singleton.getInstance();
  
  console.log(instance1 === instance2); // Expected to be True
  