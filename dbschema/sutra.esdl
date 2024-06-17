module Sutra {



  type Blog {
    title -> str;
    created -> datetime {
      default := datetime_current()
    };
    likes -> int64;
  }
}
