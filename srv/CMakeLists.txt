cmake_minimum_required(VERSION 3.11)
project(rg_daemon)

include_directories(src)

file(GLOB_RECURSE daemon_SRC
     "src/*.cpp"
     "src/*.hpp"
)

add_executable(rg_daemon ${daemon_SRC})
