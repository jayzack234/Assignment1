using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment1.Models
{
    public class GraderModel
    {
        //Contains range validation so users only select between 0 and 100
        [Required]
        public string from { get;set; } 
        [Range(0,100)]
        public string Assignments { get; set; }
        [Range(0, 100)]
        public string Group_Projects { get; set; }
        [Range(0, 100)]
        public string Quizzes { get; set; }
        [Range(0, 100)]
        public string Exams { get; set; }
        [Range(0,100)]
        public string INTEX { get; set; }
    }
}
