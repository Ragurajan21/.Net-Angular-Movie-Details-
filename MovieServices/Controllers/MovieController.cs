using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace MovieServices.Controllers
{
    public class MovieController : Controller
    {
        private readonly IConfiguration _config;

        public MovieController(IConfiguration config)
        {
            this._config = config;
        }




        // POST: MovieController/GetMovieDetials
        [HttpGet]
        [Route("GetGetMovieDetials")]
        public string GetMovieDetials()
        {
            string json;
            using (StreamReader r = new StreamReader("movies.json"))
            {
                 json = r.ReadToEnd();
               
            }
            return json;
            

        }

     
    }
}
