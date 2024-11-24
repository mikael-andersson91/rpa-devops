using System;
using System.Collections.Generic;
using System.Data;
using UiPath.Core;
using UiPath.Core.Activities.Storage;
using UiPath.Excel;
using UiPath.Excel.Activities;
using UiPath.Excel.Activities.API;
using UiPath.Excel.Activities.API.Models;
using UiPath.Mail.Activities.Api;
using UiPath.Orchestrator.Client.Models;
using UiPath.Testing;
using UiPath.Testing.Activities.Api.Models;
using UiPath.Testing.Activities.Models;
using UiPath.Testing.Activities.TestData;
using UiPath.Testing.Activities.TestDataQueues.Enums;
using UiPath.Testing.Enums;
using UiPath.UIAutomationNext.API.Contracts;
using UiPath.UIAutomationNext.API.Models;
using UiPath.UIAutomationNext.Enums;
using UiPathSampleProject.ObjectRepository;

namespace UiPathSampleProject
{
    public class Animal
    {
        private string _name;
        private int _numberOfLegs;
        
        public string Name { get => _name; }
        public int NumberOfLegs { get => _numberOfLegs; }
        
        public Animal(string name, int numberOfLegs)
        {
            _name = name;
            _numberOfLegs = numberOfLegs;
        }
    }
}