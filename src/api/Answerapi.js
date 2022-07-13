const Answers = [
    {
        id: "1",
        description:
          "program for print 'HELLO WORLD' ",
        answer1:
        `class Main
{
 public static void main(String[] args)
 {
    System.out.print("HELLO WORLD!");
 }
}`
      },


      {
        id: "2",
        description:
          "Check No. even or odd",
        answer1: 
        `class Main
{
  public static void main(String[] args)
  {
    int n = 5;
    if(n%2==0)
      System.out.print("Even");
    else
      System.out.print("Odd");
  }
}`
      },


      {
        id: "3",
        description:
          "Find factorial of a number",
        answer1: "x",
      },


      {
        id: "4",
        description:
          "Check prime Number",
        answer1:
        `class Main
{
  public static void main(String[] args)
  {
    int n = 9;
    for(int i=2; i<n-1; i++){
      if(n%i==0){
        System.out.print("Not Prime");
        break;
      }else{
        System.out.prime("Prime");
      }
    }
  }
}`
      },


      {
        id: "5",
        description:
          "Largest among n digit",
        answer1: "x",
      },
      {
        id: "6",
        description:
          "Sum of first n number",
        answer1: "x",
      },
      {
        id: "7",
        description:
          "swap two number",
        answer1: "x",
      },
      {
        id: "8",
        description:
          "print fibonacci sequence",
        answer1: "x",
      },
      {
        id: "9",
        description:
          "Check No. is palindrome",
        answer1: "x",
      },
      {
        id: "10",
        description:
          "Check year is Leap year",
        answer1: "x",
      },
      {
        id: "11",
        description:
          "Check No. is Strong Number",
        answer1: "x",
      },
      {
        id: "12",
        description:
          "Calculate Simple interest",
        answer1: "x",
      },
      {
        id: "13",
        description:
          "Print array in reverse",
        answer1: "x",
      },
      {
        id: "14",
        description:
          "Print String in reverse",
        answer1: "x",
      },
];

export default Answers;