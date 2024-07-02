
const getBackground = (index: number) => {
    switch (index) {
      case 0:
        return "bg-[url('/images/background/first.svg')]";
      case 1:
        return "bg-[url('/images/background/second.svg')]";
      case 2:
        return "bg-[url('/images/background/third.svg')]";
      case 3:
        return "bg-[url('/images/background/for.svg')]";
    }
  };


  const keys = () =>{
    const key = process.env.PUBLIC_KEY
    return key;
  }


  export {getBackground, keys};