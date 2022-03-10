DROP DATABASE IF EXISTS ProductInformation;

CREATE DATABASE ProductInformation;

-- Move into the db
\c ProductInformation;

CREATE TABLE products (
  id integer NOT NULL,
  name text NOT NULL,
  slogan text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  default_price integer NOT NULL,
  PRIMARY KEY(id, default_price)
);

CREATE TABLE styles (
  product_id integer NOT NULL,
  style_id integer NOT NULL,
  "name" text,
  original_price integer,
  sale_price integer,
  products_default_price integer,
  PRIMARY KEY(product_id),
  UNIQUE(products_default_price, product_id)
);


CREATE TABLE photos (
  thumbnail_url text,
  url text NOT NULL,
  styles_product_id integer NOT NULL
);


COPY products
FROM '/Users/anisahmajeed/spite/anisah-sdc/csv files/product.csv'
DELIMITER ','
CSV HEADER;


COPY styles
FROM '/Users/anisahmajeed/spite/anisah-sdc/csv files/styles.csv'
DELIMITER ','
CSV HEADER
NULL as 'null';

COPY photos
FROM '/Users/anisahmajeed/spite/anisah-sdc/csv files/photos.csv'
DELIMITER ','
CSV HEADER;