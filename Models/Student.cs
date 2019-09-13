using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Student
    {
        public int id { get; set; }
        public string firstname{ get; set; }
        public string lastname { get; set; }
        public int? age { get; set; }
    }
}