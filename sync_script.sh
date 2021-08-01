until ( curl http://localhost:3001/graphql );
do
  echo "sub1 is not available yet"
  sleep1
done

until ( curl http://localhost:3002/graphql );
do
  echo "sub2 is not available yet"
  sleep1
done

echo "sub1 & sub2 are ready"