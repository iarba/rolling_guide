#include <cstdio>
#include <cstdint>
#include <sstream>
#include <iostream>
#include <iomanip>
#include <chrono>

#include "httplib.h"

int main(int argc, char **argv) {
  printf("Hello world\n");
  httplib::Server svr;

  svr.set_logger([](const httplib::Request &req, const httplib::Response &res) {
    std::stringstream ss;
    auto now_ttp = std::chrono::system_clock::to_time_t(std::chrono::system_clock::now());
    ss << std::setw(30) << std::ctime(&now_ttp);
    ss << " | Request from " << std::setw(20) << req.remote_addr << ": ";
    ss << std::setw(10) << req.method << ' ';
    ss << std::setw(30) << req.path << " - ";
    ss << res.status << std::setw(30) << res.reason;
    std::cout << ss.str();
  });

  if(!svr.set_mount_point("/", "../../static/")) {
    printf("Error: failed to mount static files\n");
  }

  svr.Get("/api/meow", [](const httplib::Request &req, httplib::Response &res) {
    res.set_content("meow", "text/plain");
  });

  uint16_t port = 7777;
  printf("Starting listener on %u\n", port);
  svr.listen("localhost", port);
  return 0;
}
