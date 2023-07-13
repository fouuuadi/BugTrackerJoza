package com.bugtracker.bug.tracker.joza.domain.response;

public class ApiResponse<T> {
    private String error;

    private String warning;

    private T content;

    public ApiResponse() {
    }

    public ApiResponse(String error, String warning, T content) {
        this.error = error;
        this.warning = warning;
        this.content = content;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getWarning() {
        return warning;
    }

    public void setWarning(String warning) {
        this.warning = warning;
    }

    public T getContent() {
        return content;
    }

    public void setContent(T content) {
        this.content = content;
    }
}
