CREATE MIGRATION m1ldihbbv2oupfvp2jkc4xpa3nifbdbfqk2wzwo6kbzap5c4yyyktq
    ONTO initial
{
  CREATE MODULE Sutra IF NOT EXISTS;
  CREATE TYPE Sutra::Blog {
      CREATE PROPERTY created: std::datetime {
          SET default := (std::datetime_current());
      };
      CREATE PROPERTY likes: std::int64;
      CREATE PROPERTY title: std::str;
  };
};
