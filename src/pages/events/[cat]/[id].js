const EventPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Image src={data.image} width={500} height={300} alt={data.title} />
    </div>
  );
};
export default EventPage;

export async function getStaticPaths() {
  const data = await import("data/data.json");
  const allEvents = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context.params.id;
  const { allEvents } = await import("data/data.json");
  const eventData = allEvents.filter((ev) => id === ev.id);

  return {
    props: { data: eventData },
  };
}
