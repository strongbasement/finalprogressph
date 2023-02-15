var moreless=true;
function view()
{
  if(moreless)
  {
  document.getElementById('des').innerHTML="The name rain lilies comes from their tendency to send up flushes of flowers within a few days after a soaking rain.Elegant and easy to grow, rain lilies liven up gardens with funnel- to goblet-shaped flowers in a range of colors. Different species bloom at different times, so you can enjoy their blooms throughout much of the growing season if you grow several kinds.";
    document.getElementById('more').innerHTML="...Less";
    moreless=false;
  }
  else {
    document.getElementById('des').innerHTML="The name rain lilies comes from their tendency to send up flushes of flowers within a few days after a soaking rain.";
      document.getElementById('more').innerHTML="...More";
      moreless=true;

  }


}
