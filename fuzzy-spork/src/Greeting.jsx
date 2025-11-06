function Greeting() {
  const userName = 'Egor';

  const currentHour = new Date().getHours();
  let timeOfDay;
  if (currentHour < 12) {
    timeOfDay = 'Доброе утро';
  } else if (currentHour < 18) {
    timeOfDay = 'Добрый день';
  } else {
    timeOfDay = 'Добрый вечер';
  }
  return (
    <div className='greeting'>
      <h1>
        {timeOfDay}, {userName}!
      </h1>
      <p>Вы снова с нами?</p>
    </div>
  );
}
export default Greeting;
