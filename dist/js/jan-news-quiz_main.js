let score=0;function answerQuestion(e){let s=!1;$(e+" .answers li").on("click",function(){if(!s){if(s=!0,$(this).parent().addClass("clicked"),"true"==this.dataset.correct)$(this).addClass("correct"),score++,$(e+" .quiz-responses .correct-response").slideDown(200);else if("false"==this.dataset.correct){$(this).addClass("incorrect"),$(this).parent().find('[data-correct="true"]').addClass("correct"),$(e+" .quiz-responses .incorrect-response").slideDown(200)}$(e+" .quiz-responses .response-explanation").slideDown(200),$(e+" .answers li").addClass("no-hover"),console.log("answers: "+$(".answers").length),console.log("answers clicked: "+$(".answers.clicked").length),$(".answers").length==$(".answers.clicked").length&&($(".quiz-results").slideDown(200),$("#quiz-score").html(score),0==score||1==score||2==score||3==score?$("#quiz-advice").html("You can review all of this month's news on our <a href='https://grow.acorns.com/news/'>News You Can Use page<a/>."):4==score?$("#quiz-advice").html("Good job! You can review all of this month's news on our <a href='https://grow.acorns.com/news/'>News You Can Use page<a/>."):5==score&&$("#quiz-advice").html("Perfect! You know your stuff. You can review all of this month's news on our <a href='https://grow.acorns.com/news/'>News You Can Use page<a/>."))}})}$(".answers").one("mouseover",function(){answerQuestion("#"+$(this).parent().attr("id"))});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2NvcmUiLCJhbnN3ZXJRdWVzdGlvbiIsInF1ZXN0aW9uQ29udGFpbmVyIiwiYW5zd2VyTG9ja2VkIiwiJCIsIm9uIiwidGhpcyIsInBhcmVudCIsImFkZENsYXNzIiwiZGF0YXNldCIsImNvcnJlY3QiLCJzbGlkZURvd24iLCJmaW5kIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImh0bWwiLCJvbmUiLCJhdHRyIl0sIm1hcHBpbmdzIjoiQUF5RUEsSUFBQUEsTUFBQSxFQUVBLFNBQUFDLGVBQUFDLEdBQ0EsSUFBQUMsR0FBQSxFQUVBQyxFQUFBRixFQUFBLGdCQUFBRyxHQUFBLFFBQUEsV0FDQSxJQUFBRixFQUFBLENBT0EsR0FKQUEsR0FBQSxFQUVBQyxFQUFBRSxNQUFBQyxTQUFBQyxTQUFBLFdBRUEsUUFBQUYsS0FBQUcsUUFBQUMsUUFDQU4sRUFBQUUsTUFBQUUsU0FBQSxXQUNBUixRQUNBSSxFQUFBRixFQUFBLHNDQUFBUyxVQUFBLFVBQ0EsR0FBQSxTQUFBTCxLQUFBRyxRQUFBQyxRQUFBLENBQ0FOLEVBQUFFLE1BQUFFLFNBQUEsYUFDQUosRUFBQUUsTUFBQUMsU0FDQUssS0FBQSx5QkFBQUosU0FBQSxXQUNBSixFQUFBRixFQUFBLHdDQUFBUyxVQUFBLEtBR0FQLEVBQUFGLEVBQUEsMENBQUFTLFVBQUEsS0FFQVAsRUFBQUYsRUFBQSxnQkFBQU0sU0FBQSxZQUVBSyxRQUFBQyxJQUFBLFlBQUFWLEVBQUEsWUFBQVcsUUFDQUYsUUFBQUMsSUFBQSxvQkFBQVYsRUFBQSxvQkFBQVcsUUFHQVgsRUFBQSxZQUFBVyxRQUFBWCxFQUFBLG9CQUFBVyxTQUNBWCxFQUFBLGlCQUFBTyxVQUFBLEtBQ0FQLEVBQUEsZUFBQVksS0FBQWhCLE9BRUEsR0FBQUEsT0FBQSxHQUFBQSxPQUFBLEdBQUFBLE9BQUEsR0FBQUEsTUFDQUksRUFBQSxnQkFBQVksS0FBQSxxSEFDQSxHQUFBaEIsTUFDQUksRUFBQSxnQkFBQVksS0FBQSwrSEFDQSxHQUFBaEIsT0FDQUksRUFBQSxnQkFBQVksS0FBQSx1SkFTQVosRUFBQSxZQUFBYSxJQUFBLFlBQUEsV0FFQWhCLGVBQUEsSUFEQUcsRUFBQUUsTUFBQUMsU0FBQVcsS0FBQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcyBzb2NpYWwgY2xhc3MgdG8gZ2V0IHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbFwiO1xuLy8gfVxuXG5cblxuLy8gY29uc3QgbXlRdWl6ID0gW1xuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNhbXBsZSBxdWVzdGlvbiAxPycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMicsXG4vLyAgICAgICAgICdBbnN3ZXIgMycsXG4vLyAgICAgICAgICdBbnN3ZXIgNCdcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzYW1wbGUgcXVlc3Rpb24gMj8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMSxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICdxJzogJ0Egc21hcGxlIHF1ZXN0aW9uIDM/Jyxcbi8vICAgICAnb3B0aW9ucyc6IFtcbi8vICAgICAgICAgJ0Fuc3dlciAxJyxcbi8vICAgICAgICAgJ0Fuc3dlciAyJyxcbi8vICAgICAgICAgJ0Fuc3dlciAzJyxcbi8vICAgICAgICAgJ0Fuc3dlciA0J1xuLy8gICAgIF0sXG4vLyAgICAgJ2NvcnJlY3RJbmRleCc6IDIsXG4vLyAgICAgJ2NvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gY29ycmVjdCByZXNwb25zZS4nLFxuLy8gICAgICdpbmNvcnJlY3RSZXNwb25zZSc6ICdDdXN0b20gaW5jb3JyZWN0IHJlc3BvbnNlLidcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAncSc6ICdBIHNtYXBsZSBxdWVzdGlvbiA0PycsXG4vLyAgICAgJ29wdGlvbnMnOiBbXG4vLyAgICAgICAgICdBbnN3ZXIgMScsXG4vLyAgICAgICAgICdBbnN3ZXIgMidcbi8vICAgICBdLFxuLy8gICAgICdjb3JyZWN0SW5kZXgnOiAxLFxuLy8gICAgICdjb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGNvcnJlY3QgcmVzcG9uc2UuJyxcbi8vICAgICAnaW5jb3JyZWN0UmVzcG9uc2UnOiAnQ3VzdG9tIGluY29ycmVjdCByZXNwb25zZS4nXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgJ3EnOiAnQSBzbWFwbGUgcXVlc3Rpb24gNT8nLFxuLy8gICAgICdvcHRpb25zJzogW1xuLy8gICAgICAgICAnQW5zd2VyIDEnLFxuLy8gICAgICAgICAnQW5zd2VyIDInLFxuLy8gICAgICAgICAnQW5zd2VyIDMnLFxuLy8gICAgICAgICAnQW5zd2VyIDQnXG4vLyAgICAgXSxcbi8vICAgICAnY29ycmVjdEluZGV4JzogMyxcbi8vICAgICAnY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBjb3JyZWN0IHJlc3BvbnNlLicsXG4vLyAgICAgJ2luY29ycmVjdFJlc3BvbnNlJzogJ0N1c3RvbSBpbmNvcnJlY3QgcmVzcG9uc2UuJ1xuLy8gICAgIH1cbi8vIF1cblxuLy8gJCgnI3F1aXonKS5xdWl6KHtcbi8vICAgICBxdWVzdGlvbnM6IG15UXVpeixcbi8vICAgICBjb3VudGVyRm9ybWF0OiAnUXVlc3Rpb24gJWN1cnJlbnQgb2YgJXRvdGFsJ1xuLy8gfSk7XG5cbmxldCBzY29yZSA9IDA7IC8vdG90YWwgc2NvcmUgZm9yIGZpbmFsIHJlc3VsdHNcblxuZnVuY3Rpb24gYW5zd2VyUXVlc3Rpb24ocXVlc3Rpb25Db250YWluZXIpIHtcbiAgICBsZXQgYW5zd2VyTG9ja2VkID0gZmFsc2UgLy9jb250cm9scyB3aGV0aGVyIHRoZSBxdWVzdGlvbiBzaG91bGQgYmUgbG9ja2VkIGFmdGVyIGFuc3dlcmluZ1xuXG4gICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLmFuc3dlcnMgbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBpZiAoYW5zd2VyTG9ja2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1gYFxuICAgICAgICBhbnN3ZXJMb2NrZWQgPSB0cnVlO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoXCJjbGlja2VkXCIpO1xuXG4gICAgICAgIGlmICh0aGlzLmRhdGFzZXQuY29ycmVjdCA9PSBcInRydWVcIikge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNvcnJlY3RcIik7XG4gICAgICAgICAgICBzY29yZSsrO1xuICAgICAgICAgICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLnF1aXotcmVzcG9uc2VzIC5jb3JyZWN0LXJlc3BvbnNlJykuc2xpZGVEb3duKDIwMCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhc2V0LmNvcnJlY3QgPT0gXCJmYWxzZVwiKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG4gICAgICAgICAgICBwYXJlbnQuZmluZCgnW2RhdGEtY29ycmVjdD1cInRydWVcIl0nKS5hZGRDbGFzcygnY29ycmVjdCcpO1xuICAgICAgICAgICAgJChxdWVzdGlvbkNvbnRhaW5lciArICcgLnF1aXotcmVzcG9uc2VzIC5pbmNvcnJlY3QtcmVzcG9uc2UnKS5zbGlkZURvd24oMjAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQocXVlc3Rpb25Db250YWluZXIgKyAnIC5xdWl6LXJlc3BvbnNlcyAucmVzcG9uc2UtZXhwbGFuYXRpb24nKS5zbGlkZURvd24oMjAwKTtcblxuICAgICAgICAkKHF1ZXN0aW9uQ29udGFpbmVyICsgJyAuYW5zd2VycyBsaScpLmFkZENsYXNzKCduby1ob3ZlcicpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdhbnN3ZXJzOiAnICsgJChcIi5hbnN3ZXJzXCIpLmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2coJ2Fuc3dlcnMgY2xpY2tlZDogJyArICQoXCIuYW5zd2Vycy5jbGlja2VkXCIpLmxlbmd0aClcblxuICAgICAgICAvLyBzaG93cyAnc2VlIHJlc3VsdHMnIGJ1dHRvbiBhZnRlciBhbGwgZml2ZSBxdWVzdGlvbnMgaGF2ZSBiZWVuIGFuc3dlcmVkXG4gICAgICAgIGlmICgkKFwiLmFuc3dlcnNcIikubGVuZ3RoID09ICQoXCIuYW5zd2Vycy5jbGlja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnF1aXotcmVzdWx0cycpLnNsaWRlRG93bigyMDApO1xuICAgICAgICAgICAgJCgnI3F1aXotc2NvcmUnKS5odG1sKHNjb3JlKTtcblxuICAgICAgICAgICAgaWYgKHNjb3JlID09IDAgfHwgc2NvcmUgPT0gMSB8fCBzY29yZSA9PSAyIHx8IHNjb3JlID09IDMpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiWW91IGNhbiByZXZpZXcgYWxsIG9mIHRoaXMgbW9udGgncyBuZXdzIG9uIG91ciA8YSBocmVmPSdodHRwczovL2dyb3cuYWNvcm5zLmNvbS9uZXdzLyc+TmV3cyBZb3UgQ2FuIFVzZSBwYWdlPGEvPi5cIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlID09IDQpIHtcbiAgICAgICAgICAgICAgICAkKCcjcXVpei1hZHZpY2UnKS5odG1sKFwiR29vZCBqb2IhIFlvdSBjYW4gcmV2aWV3IGFsbCBvZiB0aGlzIG1vbnRoJ3MgbmV3cyBvbiBvdXIgPGEgaHJlZj0naHR0cHM6Ly9ncm93LmFjb3Jucy5jb20vbmV3cy8nPk5ld3MgWW91IENhbiBVc2UgcGFnZTxhLz4uXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSA9PSA1KSB7XG4gICAgICAgICAgICAgICAgJCgnI3F1aXotYWR2aWNlJykuaHRtbChcIlBlcmZlY3QhIFlvdSBrbm93IHlvdXIgc3R1ZmYuIFlvdSBjYW4gcmV2aWV3IGFsbCBvZiB0aGlzIG1vbnRoJ3MgbmV3cyBvbiBvdXIgPGEgaHJlZj0naHR0cHM6Ly9ncm93LmFjb3Jucy5jb20vbmV3cy8nPk5ld3MgWW91IENhbiBVc2UgcGFnZTxhLz4uXCIpO1xuICAgICAgICAgICAgLy8gfSBlbHNlIGlmIChzY29yZSA9PSA2KSB7XG4gICAgICAgICAgICAvLyAgICAgJCgnI3F1aXotYWR2aWNlJykuaHRtbChcIlBlcmZlY3QhIFlvdSBrbm93IHlvdXIgc3R1ZmYsIGJ1dCBoZXJlIGFyZSBzb21lIHJlc291cmNlcyB0byBoZWxwIHlvdSBsZWFybiBldmVuIG1vcmUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxufVxuXG4kKCcuYW5zd2VycycpLm9uZSgnbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICBsZXQgcGFyZW50RGl2ID0gKCQodGhpcykucGFyZW50KCkuYXR0cignaWQnKSlcbiAgICBhbnN3ZXJRdWVzdGlvbignIycgKyBwYXJlbnREaXYpO1xufSlcbiAgICBcbiJdfQ==
