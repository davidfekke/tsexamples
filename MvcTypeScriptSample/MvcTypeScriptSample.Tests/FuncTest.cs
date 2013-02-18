using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;

namespace MvcTypeScriptSample.Tests
{
    [TestClass]
    public class FuncTest
    {
        

        public static List<string> AcceptLambda(Func<string, bool> myLamda)
        {
            var myList = new List<string> { "First", "Second", "Third", "Forth" };
            List<string> curList = new List<string>();
            foreach (string item in myList)
            {
                if (myLamda(item))
                    curList.Add(item);
            }
            return curList;
        }

        [TestMethod]
        public void FirstTest()
        {
            List<string> bList = AcceptLambda(x => 1 == 1);
            int count = bList.Count;
            Assert.AreEqual(4, count);
        }
    }
}
